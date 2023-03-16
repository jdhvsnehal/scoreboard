let hscore = 0
let gscore = 0
function add1_h() {
    hscore += 1
    document.getElementById("home-score").textContent = hscore
}
function add2_h() {
    hscore += 2
    document.getElementById("home-score").textContent = hscore
}
function add3_h() {
    hscore += 3
    document.getElementById("home-score").textContent = hscore
}
function add1_g() {
    gscore += 1
    document.getElementById("guest-score").textContent = gscore
}
function add2_g() {
    gscore += 2
    document.getElementById("guest-score").textContent = gscore
}
function add3_g() {
    gscore += 3
    document.getElementById("guest-score").textContent = gscore
}