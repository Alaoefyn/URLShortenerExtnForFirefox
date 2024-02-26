# URLShortenerExtnForFirefox

SECURITY TESTS ARE NOT DONE! USE AT YOUR OWN RISK!




Python Script (url_shortener.py):
 Main script generates a shortened URL from a given input URL using a simple hashing algorithm. It makes that soooo long url's to more compact but yet powerfull.
                                        It's a command-line program and can be executed from the terminal.

   
  The Firefox extension consists of several files:
  
  manifest.json: Defines the extension's metadata and permissions.
      
  background.js: Handles browser action events and invokes the Python script.
      
  popup.html and popup.js: Creates a simple popup UI for the extension.
  

# USAGE:

-Setting Up the Python Script

-Ensure you have Python installed on your system (If it is Linux,it is probably already installed,check for windows for sure).

-Copy the content of url_shortener.py into a new Python file (ex, url_shortener.py).

-Replace "your_short_domain" with your desired short domain.

-Save all the file.

# Setting Up the Firefox Extension

-Create a new directory for your extension project.

-Create the following files in the directory: manifest.json, background.js, popup.html, and popup.js.

-Copy the respective content from the provided code snippet into each file.

-Modif manifest.json to include proper metadata like extension name, version, and icons.

-Modif background.js and popup.js if necessary, ensuring they reference the correct script for invoking the Python script.

-Save all the files.

# Loading the Extension in Firefox

-Open Firefox.
    
-Type about:debugging in the address bar and press Enter
    
-Click on "This Firefox" in the left sidebar.
    
-Click on "Load Temporary Add-on...".
    
-Navigate to your extension directory and select any file inside the directory.

# Using the Extension

  -Once the extension is loaded, you'll see its icon in the Firefox toolbar.

  -Clicking the icon will execute the extension.
  
  -If you're using the popup UI, click the "Shorten URL" button to shorten the current URL.
  
  -If you're using the browser action, simply click the extension icon to shorten the current URL.
  
  -The shortened URL will be generated and displayed.

          MAKE SURE PROPER PERMISSIONS FOR YOUR SYSTEM ARE SET IN manifest.json
    
