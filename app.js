const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/api/status", (req, res) => {
    res.status(200).json({
        application: "Automated CI/CD Pipeline",
        status: "Running",
        version: "1.0.0"
    });
});

// 404
app.use((req, res) => {
    res.status(404).send("404 | Page Not Found");
});

// Start server only when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export app for testing
module.exports = app;