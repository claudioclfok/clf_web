from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def obtener_deudas(cuit):
    url = f"https://api.bcra.gob.ar/centraldedeudores/v1.0/Deudas/{cuit}"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

@app.route("/deudas", methods=["GET"])
def deudas():
    cuit = request.args.get("cuit")
    if not cuit:
        return jsonify({"error": "Falta parámetro CUIT/CUIL/CDI"}), 400
    datos = obtener_deudas(cuit)
    return jsonify(datos)

if __name__ == "__main__":
    app.run(debug=True)

