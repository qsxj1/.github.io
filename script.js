document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const reason = document.getElementById("reason").value;
    const details = document.getElementById("details").value;

    fetch("https://discord.com/api/webhooks/1405021926035820636/zD7kiCNqqi89_JXrTd93RqO4I3lwyS5n59s8-_y77OxbEe84gy5JpO6WXsVLs-grmgUh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            embeds: [{
                title: "New Staff Application",
                color: 3447003,
                fields: [
                    { name: "Discord Username", value: username },
                    { name: "Why they want to be staff", value: reason },
                    { name: "Additional Details", value: details || "N/A" }
                ],
                footer: { text: "PlusChat Applications" },
                timestamp: new Date()
            }]
        })
    })
    .then(res => {
        if (res.ok) {
            alert("Application sent successfully!");
            document.getElementById("applicationForm").reset();
        } else {
            alert("Failed to send application.");
        }
    })
    .catch(err => {
        alert("Error: " + err);
    });
});
