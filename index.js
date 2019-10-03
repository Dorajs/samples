const readJson = require('read-package-json')
const fs = require('fs')
const archiver = require('archiver')
const path = require('path')

const endpoint = 'https://repo.dorajs.com'

async function readPackage(srcDir) {
    let root = path.resolve(__dirname, srcDir)
    let file = path.resolve(root, "package.json")
    return new Promise(function (resolve, reject) {
        // readJson(filename, [logFunction=noop], [strict=false], cb)
        readJson(file, console.error, false, function (er, data) {
            if (er) {
                console.error("There was an error reading the file")
                reject(er)
                return
            }
            resolve(data)
        });
    })
}

async function buildPackage(srcDir, outputFile) {
    var output = fs.createWriteStream(outputFile)
    var zipArchive = archiver('zip')
    return new Promise(function (resolve, reject) {
        output.on('close', function () {
            resolve(null)
        });

        zipArchive.pipe(output)
        zipArchive.glob('**/*', {
            cwd: srcDir,
            ignore: ['node_modules/**', 'dist/**', '.vscode/**', '**-lock.json']
        });

        zipArchive.finalize(function (err, bytes) {
            if (err) {
                reject(err)
            }
        })
    })
}

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename);
    const fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}

deleteFolderRecursive(path.resolve(__dirname, "dist"))
let promises = fs.readdirSync('./')
    .filter(file => !file.startsWith('.') &&
        file != 'node_modules' &&
        file != '.idea' && 
        file != 'dist' &&
        fs.lstatSync(file).isDirectory())
    .map(async function (file) {
        let dir = path.resolve(__dirname, file)
        let data = await readPackage(dir)
        if (!data.uuid) {
            throw Error("uuid must be not empty")
        }
        const saveDir = path.resolve(__dirname, `dist/${data.uuid}/${data.version}`)
        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir, {
                recursive: true
            });
        }
        const doraFile = path.resolve(saveDir, `${data.label}.dora`)
        await buildPackage(dir, doraFile)
        let iconFile = fs.readdirSync(dir).find(file => {
            return path.basename(file).startsWith("icon.")
        })
        fs.copyFileSync(path.resolve(dir, iconFile), path.resolve(saveDir, iconFile))
        return {
            label: data.label,
            uuid: data.uuid,
            description: data.description,
            version: data.version,
            author: data.author,
            size: getFilesizeInBytes(doraFile),
            file: `${endpoint}/${data.uuid}/${data.version}/${data.label}.dora`,
            url: `https://github.com/linroid/dora-addons/tree/master/${file}`,
            icon: iconFile ? `${endpoint}/${data.uuid}/${data.version}/${iconFile}` : null
        }
    });

Promise.all(promises).then(function (manifest) {
    console.log(manifest)
    let json = JSON.stringify(manifest, null, '    ')
    const manifestFile = path.resolve(__dirname, `dist/all.json`)
    fs.writeFileSync(manifestFile, json)
    console.log('\nBUILD SUCCESS')
})