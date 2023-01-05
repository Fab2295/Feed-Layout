import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
export function getNextIdInArrayObject(array) {
    return (Math.max(...array.map(value => value.id)) + 1)
}

export function getPublishedDateFormattes(date) {
    return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
}

export function getTimeAgo(date = new Date().toDateString()) {
    return formatDistanceToNow(date, {
        addSuffix: true,
        locale: ptBR
    })
}