
var itemTemplate = $('#templates .item').html();

var newItemHtml = Robin.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);
