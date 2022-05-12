from rest_framework import serializers


class ProstateSerializer(serializers.Serializer):

    PSA = serializers.FloatField(
        min_value=0,
        max_value=1000,
    )
    DRE = serializers.BooleanField()
    TRUS_volume = serializers.FloatField(
        min_value=0,
        max_value=1000,
    )
    TRUS_Lesion = serializers.BooleanField()
