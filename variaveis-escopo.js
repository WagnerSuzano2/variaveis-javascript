{
    const idade = 30;
    {
        //vai funciona pois a variavel esta fora do escopo
        console.log(idade);
    }
}
//não vai funciona pois a varivel esta dentro do escopo
console.log(idade);