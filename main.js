$(() => {
    let thenTime = moment().utc()
    let nowP = moment.utc()
    let deliverTime = moment().add(5, 'day')
    let funTime = moment().utcOffset(80)

$("#now").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
$("#then").text(thenTime.format('MMMM Do YYYY, h:mm:ss a'))
$('#deliverFuture').text(deliverTime.format('MMMM Do YYYY, h:mm:ss a'))
$('#nowParseable').text(nowP.format('DD/MM/YYYY, h:mm:ss'))



});