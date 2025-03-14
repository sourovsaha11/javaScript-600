function useOfMobilePhone(dailyUse) {
    return dailyUse * 30;
}
const monthlyUse = useOfMobilePhone(5);
console.log(monthlyUse);