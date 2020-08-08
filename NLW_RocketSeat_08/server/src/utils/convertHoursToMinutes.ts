// -- Criamos esse arquivo com uma função que pode ser usada em qualquer outro documento, basta apenas exportá-la (export default) e no arquivo que precisamos usar, importá-la com o seu caminho relativo até aqui!!

export default function convertHourToMinutes(time: string){
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}