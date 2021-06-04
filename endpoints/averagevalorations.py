from silence.decorators import endpoint

@endpoint(
    route="/averagevalorations",
    method="GET",
    sql="SELECT * FROM averagevalorations"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/averagevalorations/$photoId",
    method="GET",
    sql="SELECT * FROM averageValorations WHERE photoId = $photoId"
)
def get_by_photo_Id():
    pass

