import {checkNumInputs} from "./checkNumInputs";

const forms = (state) => {
    const allForms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");

    checkNumInputs('input[name="user_phone"]');

    const messages = {
        loading: "Загрузка...",
        success: "Спасибо, скоро с вами свяжуться",
        failure: "Что-то пошло не так, попробуйте через 5 минут",
    };

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = messages.loading;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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

            const jsonObject = {};

            for (const [key, value] of formData.entries()) {
                jsonObject[key] = value;
            }

            postData(
                "https://simple-server-cumz.onrender.com/api/data",
                jsonObject
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
            if (form.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
        });
    });
};

export { forms };
