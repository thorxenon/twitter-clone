export const formatRelative = (date: Date) =>{
    const now = new Date();
    const diff = date.getTime() - now.getTime();

    type Unit = {
        unit: Intl.RelativeTimeFormatUnit,
        milesecond: number
    }

    const units: Unit[] =[
        { unit: 'year', milesecond: 1000 * 60 * 60 * 24 * 365 },
        { unit: 'month', milesecond: 1000 * 60 * 60 * 24 * 30 },
        { unit: 'day', milesecond: 1000 * 60 * 60 * 24 },
        { unit: 'hour', milesecond: 1000 * 60 * 60 },
        { unit: 'minute', milesecond: 1000 * 60 },
        { unit: 'second', milesecond: 1000 },
    ];

    for(const { unit, milesecond } of units){
        const difference = diff / milesecond;
        if(Math.abs(difference) >= 1){
            const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
            return rtf.format(Math.round(difference), unit);
        }
    }

    return 'agora';
}