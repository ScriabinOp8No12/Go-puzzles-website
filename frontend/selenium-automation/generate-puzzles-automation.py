from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Initialize the WebDriver
driver = webdriver.Chrome()

# Open the webpage with SGFs
driver.get("https://go-puzzles.com/sgfs")

# Find all the 'Generate Puzzles' buttons
generate_buttons = driver.find_elements(By.CLASS_NAME, "generate-puzzle-button-class")

# Maximum timeout duration before moving onto next button click
timeout_duration = 120

# Loop through each button and click it
for button in generate_buttons:
    button.click()

    try:
        # Wait for puzzle generation to complete
        WebDriverWait(driver, timeout_duration).until(
            EC.presence_of_element_located((By.CLASS_NAME, "success-message-class"))
        )
    except TimeoutException:
        print("Timed out waiting for puzzle generation. Moving to the next one.")

# Close the driver
driver.quit()
