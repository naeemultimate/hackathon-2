//function to convert date to UK

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("diary-form");
//     const entriesContainer = document.getElementById("entries-container");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
        
//         const title = document.getElementById("title").value;
//         const content = document.getElementById("content").value;
//         const entryDate = document.getElementById("entry-date").value;

//         if (title && content && entryDate) {
//             const entryElement = document.createElement("div");
//             entryElement.classList.add("entry");
//             entryElement.innerHTML = `
//                 <h3>${title}</h3>
//                 <p>${content}</p>
//                 <small>${entryDate}</small>
//             `;
            
//             entriesContainer.prepend(entryElement);
            
//             form.reset();
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("diary-form");
    const entriesContainer = document.getElementById("entries-container");

    async function fetchEntries() {
        const response = await fetch("http://localhost:3000/diaryentries");
        const entries = await response.json();
        entriesContainer.innerHTML = "";
        entries.forEach(entry => {
            const entryElement = document.createElement("div");
            entryElement.classList.add("entry");
            entryElement.innerHTML = `
                <h3>${entry.title}</h3>
                <p>${entry.content}</p>
                <small>${entry.entry_date}</small>
                <button onclick="deleteEntry('${entry.title}')">Delete</button>
            `;
            entriesContainer.prepend(entryElement);
        });
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const entryDate = document.getElementById("entry-date").value;

        const response = await fetch("http://localhost:3000/diaryentries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content, entry_date: entryDate })
        });
        
        if (response.ok) {
            fetchEntries();
            form.reset();
        } else {
            alert("Failed to add entry");
        }
    });

    async function deleteEntry(title) {
        const response = await fetch(`http://localhost:3000/diaryentries/${title}`, {
            method: "DELETE"
        });
        if (response.ok) {
            fetchEntries();
        } else {
            alert("Failed to delete entry");
        }
    }

    fetchEntries();
});
