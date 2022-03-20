function graph() {
    let code = document.getElementById("code").value;
    let link = "https://corona.dnsforfamily.com/graph.png?c=" + code
    let img = document.getElementById("gimg");
    img.src = link
}