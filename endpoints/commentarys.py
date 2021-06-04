from silence.decorators import endpoint

@endpoint(
    route="/commentarys",
    method="GET",
    sql="SELECT * FROM Commentarys"
)
def get_all():
    pass


###############################################################################

@endpoint(
    route="/commentarys/$photoId",
    method="GET",
    sql="SELECT * FROM Commentarys WHERE photoId = $photoId"
)
def get_by_photo_id():
    pass

###############################################################################

@endpoint(
    route="/commentarys",
    method="POST",
    sql="INSERT INTO Commentarys (text, userId, photoId) VALUES ($text, $userId, $photoId)",
    description="Creates a new photo",
    #auth_required=True,
)
def create(text, userId, photoId):
    pass

###############################################################################

@endpoint(
    route="/commentarys/$commentaryId",
    method="PUT",
    sql="UPDATE Commentarys SET text = $text, userId = $userId, photoId = $photoId",
    description="Updates an existing photo",
    #auth_required=True,
)
def update(text, userId, photoId):
    pass

###############################################################################

@endpoint(
    route="/commentarys/$commentaryId",
    method="DELETE",
    sql="DELETE FROM Commentarys WHERE commentaryId = $commentaryId",
    description="Removes a photo",
    auth_required=True,
)
def delete():
    pass
