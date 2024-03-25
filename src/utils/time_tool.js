import dayjs from "dayjs"

//返回当前的时间
const nowTime = () => {
    return dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
}

//返回当前时间的上一个小时的时间
const preHourTime = () => {
    return dayjs(new Date().getTime() - 3600000).format('YYYY-MM-DD HH:mm:ss')
}

export {
    nowTime,
    preHourTime
}