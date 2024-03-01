function blogShowMore() {
    moreBlogsContainer = document.getElementById("more-blogs");
    moreBlogsButton = document.getElementById("more-blogs-button");
    if (moreBlogsContainer.classList.contains("inactive")) {
        moreBlogsContainer.classList.remove("inactive");
        moreBlogsContainer.classList.add("active");
        moreBlogsButton.innerHTML = "Show Less";
    } else {
        moreBlogsContainer.classList.remove("active");
        moreBlogsContainer.classList.add("inactive");
        moreBlogsButton.innerHTML = "Show More";
    }
}