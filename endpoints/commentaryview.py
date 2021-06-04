from silence.decorators import endpoint

@endpoint(
    route="/commentaryview/$photoId",
    method="GET",
    sql="SELECT * FROM Commentaryview WHERE photoId = $photoId"
)
def get_by_photo_Id():
    pass

###############################################################################

