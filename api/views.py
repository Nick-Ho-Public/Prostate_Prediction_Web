from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from distutils.util import strtobool
import requests
from .serializers import ProstateSerializer

base_url = "http://idrps.shealth.info/ml/"

# Create your views here.
class Predict_prostate(APIView):
    serializer_class = ProstateSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        model = request.query_params.get("model", "")
        try:
            significant = strtobool(request.query_params.get("significant", "False"))
        except:
            significant = False

        api_url = base_url + "prostate/" + ("sign" if significant else "bin")
        param = {"model": model}

        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"Bad Request": "Invalid POST Data"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        redirect_request = requests.post(api_url, params=param, json=request.data)

        if redirect_request.status_code == status.HTTP_200_OK:
            return Response(redirect_request.json(), status=status.HTTP_200_OK)

        return Response(
            {"Request Error": redirect_request.json()},
            status=redirect_request.status_code,
        )