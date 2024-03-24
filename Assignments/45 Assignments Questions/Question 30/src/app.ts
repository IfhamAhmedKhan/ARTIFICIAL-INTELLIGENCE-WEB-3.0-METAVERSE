// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let yourName: string[] = ["Ifham", "Mubashir", "Asad", "Afnan", "Aayan"];

yourName.forEach(username => {
    if (username === "Ifham") {
        console.log("Hello admin, Welcome back!");
    } else {
        console.log(`Hello ${username}, I hope you are having a good day.`);
    }
});
