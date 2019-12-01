console.log(document);
$dora.sendEvent("number", 1);
$dora.sendEvent("bool", 1.0);
$dora.sendEvent("string", 1.0);
$dora.sendEvent("array", [1, 2, 3]);
$dora.sendEvent("object", {
  to: 'foo@example.com',
  name: 'Foo'
});
