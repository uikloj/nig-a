import requests
import csv

urt = "https://restcountries.com/v3.1/all"

response = requests.get(urt)
data = response.json()

capitals_coordinates = {}

print(data)

for country in data:
    country_name = country.get("name").get("common")
    capital = country.get("capital")
    latlng = country.get("latlng")

    if capital and latlng:
        capitals_coordinates[country_name] = {
            "capital": capital[0],
            "latitude": latlng[0],
            "longitude" : latlng[1]
        }
with open ("coordinates.csv","w", newline="", encoding="utf-8") as csvfile:

    fieldnames = ["country","capital", "latitude", "longitude"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for country, info in capitals_coordinates.items():

        writer.writerow({
            "country" : country,
            "capital" : info ["capital"],
            "latitude": info ["latitude"],
            "longitude": info["longitude"]
        })
print("data has been written to coordinates.csv file.")
