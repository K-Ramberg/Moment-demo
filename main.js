$(() => {
    let now = moment()
    let thenTime = moment().utc()
    let deliverTime = moment().add(5, 'day')
    let timeAlt = moment().utcOffset(-8000)

$("#now").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
$("#then").text(thenTime.format('MMMM Do YYYY, h:mm:ss a'))
$('#deliverFuture').text(deliverTime.format('MMMM Do YYYY, h:mm:ss a'))
$('#nowParseable').text(moment().format('DD/MM/YYYY, h:mm:ss'))
$('#alt').text(timeAlt.format('MMMM Do YYYY, h:mm:ss a'))

})