export default function isValidYear(date){
    return (date||"").toString().trim().length === 4
}