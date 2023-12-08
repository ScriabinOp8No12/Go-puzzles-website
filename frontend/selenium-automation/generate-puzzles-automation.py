import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Initialize the WebDriver
driver = webdriver.Chrome()
# Open the webpage
driver.get("https://go-puzzles.com")
# Find the login button, and log in
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
time.sleep(5)
# # Find all the 'Generate Puzzles' buttons
# generate_buttons = driver.find_elements(By.CLASS_NAME, "create-puzzles-button")

# # Maximum timeout duration before moving onto next button click
# timeout_duration = 90

# # Loop through each button and click it
# for button in generate_buttons:
#     button.click()

#     try:
#         # Wait for puzzle generation to complete
#         WebDriverWait(driver, timeout_duration).until(
#             EC.presence_of_element_located((By.CLASS_NAME, "success-notification"))
#         )
#     except TimeoutException:
#         print("Timed out waiting for puzzle generation. Moving to the next one.")

# # Close the driver
# driver.quit()
