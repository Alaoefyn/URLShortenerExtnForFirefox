import hashlib

def shorten_url(url):
    # Generate a unique hash for the URL
    url_hash = hashlib.sha256(url.encode()).hexdigest()[:8]
    return f"shortened_domain/{url_hash}"

if __name__ == "__main__":
    input_url = input("Enter the desired URL to shorten: ")
    shortened_url = shorten_url(input_url)
    print("Shortened URL is:", shortened_url)
