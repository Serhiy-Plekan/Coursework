from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import pandas as pd

from coursework import linear_time_trend, logarithmic_time_trend, hyperbolic_time_trend, smoothing

from django.http import HttpResponse
# Create your views here.

@api_view(['GET'])
def index(request):
    data="hello"
    return Response(data)


@api_view(['POST'])
def linearTrend(request):
    # data = [float(i.replace(',', '.')) for i in [j for j in request.data][0].split(' ')]
    if '.xls' in str(request.FILES['file']):
        user_data = pd.read_excel(request.FILES['file'])
        data = linear_time_trend(user_data)
        return Response(data)
    error_message = 'Please, choose the correct file format'
    return Response({'error': error_message})
    


@api_view(['POST'])
def logarithmicTrend(request):
    if '.xls' in str(request.FILES['file']):
        user_data = pd.read_excel(request.FILES['file'])
        data = logarithmic_time_trend(user_data)
        return Response(data)
    error_message = 'Please, choose the correct file format'
    return Response({'error': error_message})
    

@api_view(['POST'])
def hyperbolicTrend(request):
    if '.xls' in str(request.FILES['file']):
        user_data = pd.read_excel(request.FILES['file'])
        data = hyperbolic_time_trend(user_data)
        return Response(data)
    error_message = 'Please, choose the correct file format'
    return Response({'error': error_message})

    
@api_view(['POST'])
def dataSmoothing(request):
    if '.xls' in str(request.FILES['file']):
        user_data = pd.read_excel(request.FILES['file'])
        data = smoothing(user_data)
        return Response(data)
    error_message = 'Please, choose the correct file format'
    return Response({'error': error_message})
    