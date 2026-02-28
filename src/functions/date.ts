export function formatPrismaDate(
    dateInput: string | Date,
    timeZone = 'America/Fortaleza'
) {
    const date = new Date(dateInput)

    const formatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    })

    const parts = formatter.formatToParts(date)

    const get = (type: string) =>
        parts.find(p => p.type === type)?.value ?? ''

    const day = get('day')
    const month = get('month')
    const year = get('year')
    const hour = get('hour')
    const minute = get('minute')

    const monthNameRaw = new Intl.DateTimeFormat('pt-BR', {
        timeZone,
        month: 'long'
    }).format(date)

    const monthName =
        monthNameRaw.charAt(0).toUpperCase() + monthNameRaw.slice(1)

    return {
        date: `${day}/${month}/${year}`,
        time: `${hour}h${minute}`,
        monthName
    }
}