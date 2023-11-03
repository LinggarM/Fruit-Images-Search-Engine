# Fruit-Images-Search-Engine
<b>Content-Based Image Retrieval (CBIR)</b> Applications of <b>Information Retrieval</b> with Fruit Images.

## About the Project

This is a web-based search engine program of Information Retrieval or **Content-Based Image Retrieval (CBIR)** application to search the most similar fruit images based on an uploaded image.

The result will also show the **Euclidean distance** between the uploaded image (query) and the resulting images.

This program is created with Flask using Python programming language.

Files informations:
* **app.py**: flask server
* **feature_extractor.py**: a Feature Extractor module to extract image features using VGG16 architecture, either training images or query image
* **feature_extraction.py**: run this file to extract features of new training images. Copy and paste your new training images into "static/img" folder, run **feature_extraction.py**, and the features will be saved in "static/feature" folder

## Screenshots

### Dashboard
![Screenshots/1.%20Dashboard.png](Screenshots/1.%20Dashboard.png)

### Upload an image as a query (You can use any files from "/Testing Images" folder)
![Screenshots/2.%20Upload%20a%20File.png](Screenshots/2.%20Upload%20a%20File.png)

### Search results (The number is the distance from query to each search result)
![Screenshots/3.%20Search%20Result.png](Screenshots/3.%20Search%20Result.png)

## Live Demo
Web App **Fruit Images Search Engine**: [http://xxx.xxx](http://xxx.xxx)

## Technology Used
* HTML
* CSS
* Javascript
* Python
* Numpy
* Tensorflow
* Pillow
* Flask

## Installation

1. Clone this repo
   ```sh
   git clone https://github.com/LinggarM/Fruit-Images-Search-Engine
   ```
2. Open the repo folder you have cloned in your PC
3. Create a virtual environment
   ```sh
   python -m venv myenv
   ```
4. Activate the virtual environment
   ```sh
   myenv/Scripts/activate or "myenv/Scripts/activate" (Windows)
   myenv/bin/activate (Linux)
   ```
5. Install the requirements/ dependencies
   ```sh
   pip install -r requirements.txt
   ```

## Usage (Tutorials)

1. Put all of the fruit image datasets that you want to add in the "static/img" folder
2. Open CMD in Repository Folder
3. Do the feature extraction to the image datasets by executing this command :
  ```
  python feature_extraction.py
  ```
4. The features of new image datasets would be saved on "static/feature" folder
4. Run the web app by executing this command :
   ```
   python app.py
   ```
   or :
   ```
   run Flask
   ```
3. Open the given URL
   ```
   http://127.0.0.1:5000/
   ```
4. Upload any fruit image files as the query image, but make sure the fruit exists in the database in order to get a good result. You can use images in "Testing Images" folder

## Contributors
* [Linggar Maretva Cendani](https://github.com/LinggarM) - [linggarmc@gmail.com](mailto:linggarmc@gmail.com)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
* [Colorlib](https://colorlib.com/) for HTML templates
* [https://github.com/DanielaLFreire/sis-master](https://github.com/DanielaLFreire/sis-master) as the source code for this project
