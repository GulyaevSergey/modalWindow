const forms = () => {
    const allForms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach((input) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/, "");
        });
    });

    const messages = {
        loading: "Загрузка...",
        success: "Спасибо, скоро с вами свяжуться",
        failure: "Что-то пошло не так, попробуйте через 5 минут",
    };

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = messages.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data,
            mode: "no-cors",
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach((item) => (item.value = ""));
    };

    allForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            const object = {};

            const objJson = JSON.stringify(
                formData.forEach((value, key) => {
                    object[key] = value;
                })
            );

            postData(
                "https://simple-server-cumz.onrender.com/api/data",
                objJson
            )
                .then((res) => {
                    statusMessage.textContent = messages.success;
                })
                .catch(() => {
                    statusMessage.textContent = messages.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
