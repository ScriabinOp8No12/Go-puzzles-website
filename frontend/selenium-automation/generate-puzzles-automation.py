import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

start_time = time.time()

# Initialize the WebDriver
driver = webdriver.Chrome()
# Open the webpage
driver.get("https://go-puzzles.com")
driver.implicitly_wait(5) # wait up to 5 seconds to find the login button element
# Find the 2nd li element within the parent h2 element with className specified, this will be the login button
login_button = driver.find_element(By.XPATH, "//h2[@class='landing-page-signup-login-button']/li[2]")
login_button.click()
# Click into the login fields, and enter the username and password
username_field = driver.find_element(By.CLASS_NAME, "usernameField")
username_field.click()
# Input demo user's username
username_field.send_keys("seeder@gmail.com")
password_field = driver.find_element(By.CLASS_NAME, "passwordField")
password_field.click()
# Input demo user's password
password_field.send_keys("password") # hard coding seeder user's password here instead of storing in env variables because this isn't sensitive information
# Click submit button
login_submit_button = driver.find_element(By.CLASS_NAME, "loginButton")
login_submit_button.click()
# Navigate to sgfs page by changing the url
driver.get("https://go-puzzles.com/sgfs")
# wait 5 seconds to let the page load ~100 SGFs just in case not all of them load right away,
# we are not using implicitly wait because a fraction of the sgfs may load initially, but not all of them, causing complications with implicitly wait
time.sleep(2)
# # Find all the 'Generate Puzzles' buttons
generate_buttons = driver.find_elements(By.CLASS_NAME, "create-puzzles-button")

# print(len(generate_buttons)) # properly outputs 120 -> that's the number of generate puzzle buttons that are available because there are 120 sgfs

# Maximum timeout duration before moving onto next button click
timeout_duration = 30

total_buttons = len(driver.find_elements(By.CLASS_NAME, "create-puzzles-button"))
for i in range(total_buttons):
    # Refetch the button list and get the current button (to avoid stale buttons causing Selenium to miss buttons)
    button = driver.find_elements(By.CLASS_NAME, "create-puzzles-button")[i]
    time.sleep(2)
    button.click()

    try:
        # Wait for puzzle generation to complete, showing either success message, or error message, if neither show up, it means the process is hanging on Google Clou
        WebDriverWait(driver, timeout_duration).until(
            lambda d: EC.presence_of_element_located((By.CLASS_NAME, "success-notification"))(d) or
            EC.presence_of_element_located((By.CLASS_NAME, "error-notification"))(d) # Selenium isn't finding this element for some reason!
        )
        time.sleep(2) # Either this time.sleep(2) or the one below the line here: button = driver.find_elements(By.CLASS_NAME, "create-puzzles-button")[i] fixed the bug where selenium would skip like 50 sgfs at a time and only click 9 buttons before getting through all 120 sgfs
    except TimeoutException:
        print("Timed out waiting for puzzle generation. Moving to the next one.")

# Close the driver
driver.quit()

end_time = time.time()

print("elapsed time for 120 sgfs", end_time - start_time) # elapsed time for 120 sgfs 3194.21071767807
