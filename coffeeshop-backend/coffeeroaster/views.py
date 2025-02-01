from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Tag, Coffee
from .serializers import TagSerializer, CoffeeSerializer


# Create your views here.

@api_view(['GET'])
def getAllTags(request):
    tags = Tag.objects.all()
    serialized = TagSerializer(tags, many=True)

    return Response(serialized.data)

@api_view(['GET'])
def getAllCoffees(request):
    coffees = Coffee.objects.all()
    serialized = CoffeeSerializer(coffees, many=True)

    return Response(serialized.data)