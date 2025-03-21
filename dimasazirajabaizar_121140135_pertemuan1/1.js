
//Event handler untuk To-Do-LIST
document.addEventListener("DOMContentLoaded", loadTasks);

//Fungsi untuk To-Do-LIST
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let task = { text: taskText, completed: false };
    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    input.value = "";
    renderTasks();
}

function toggleTask(index) {
    let tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
    }

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = getTasks();
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTask(index);

        let span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.classList.add("completed");
        span.onclick = () => toggleTask(index);

        let button = document.createElement("button");
        button.textContent = "Hapus";
        button.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    });
}

function loadTasks() {
    renderTasks();
    }

//Fungsi Kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = 1;
            if (!Number.isInteger(angka2)){
                return "Error: Eksponen harus bilangan bulat";
            }
            for(let i = 0;i<angka2;i++){
                hasil *=angka1;
            }
            break;
        case "akar":
            if (angka1<0){
                return "Error: Input harus berupa angka non-negatif";
            }
            const test = Math.sqrt(angka1);
            hasil = test
            break;
        case "modulus":
            if(angka2==0){
                return "Pembagi tidak boleh 0";
            }
            hasil = angka1%angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

//Event handler untuk Kalkulator
document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-pangkat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "pangkat");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-akar").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } 
    if(!isNaN(angka2)){
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p class="text-red-500">Kosongkan angka 2 terlebih dahulu!</p>`;
    }
    else {
        const hasil = hitungKalkulator(angka1, 0, "akar");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: √${angka1} = ${hasil}</p>`;
    }
});

document.getElementById("btn-modulus").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "modulus");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
    }
});

//Event handler untuk Form
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Form").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form submit secara default

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        // Reset error message
        nameError.innerText = "";
        emailError.innerText = "";
        passwordError.innerText = "";

        let isValid = true;

        // Validasi Nama: Harus lebih dari 3 karakter
        if (name.length <= 3) {
            nameError.innerText = "Nama harus lebih dari 3 karakter.";
            isValid = false;
        }

        // Validasi Email: Harus format yang benar
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.innerText = "Email tidak valid.";
            isValid = false;
        }

        // Validasi Password: Minimal 8 karakter
        if (password.length < 8) {
            passwordError.innerText = "Password harus minimal 8 karakter.";
            isValid = false;
        }

        // Jika semua valid, tampilkan alert
        if (isValid) {
            alert("Form berhasil dikirim!");
            document.getElementById("Form").reset(); // Reset form setelah submit
        }
    });
});

function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerText = "🔒"; // Ubah ikon jadi terkunci
    } else {
        passwordInput.type = "password";
        toggleIcon.innerText = "👁️"; // Ubah ikon jadi mata
    }
}