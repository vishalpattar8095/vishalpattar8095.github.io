function decreaseBlurValue() {
    console.log("successfully decrease")
    var content = document.getElementById("blur_cnt");

    // Get the current blur value (initially 7px)
    var currentBlur = parseFloat(getComputedStyle(content).getPropertyValue("filter").match(/\d+/)[0]);

    // Decrease the blur value (e.g., by 2 pixels)
    var newBlur = currentBlur - 1;

    // Apply the updated blur value back to the element's style
    content.style.filter = `blur(${newBlur}px)`;
    if (newBlur >= 0) {
        // Use setTimeout to schedule the next iteration
        setTimeout(decreaseBlurValue, 350); // 1000 milliseconds (1 second) delay
    }

}
decreaseBlurValue();