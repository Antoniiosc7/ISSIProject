from silence.decorators import endpoint

@endpoint(
    route="/valorations",
    method="GET",
    sql="SELECT * FROM Valorations"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/valorations/$valorationId",
    method="GET",
    sql="SELECT * FROM Valorations WHERE valorationId = $valorationId"
)
def get_by_id():
    pass
###############################################################################


@endpoint(
    route="/valorations",
    method="POST",
    sql="INSERT INTO Valorations (number, userId, photoId) VALUES ($number, $userId, $photoId)",
    description="Creates a new photo",
    auth_required=True,
)
def create(number, userId, photoId):
    pass

###############################################################################

@endpoint(
    route="/valorations/$valorationId",
    method="PUT",
    sql="UPDATE Valorations SET number = $number, userId = $userId, photoId = $photoId",
    description="Updates an existing photo",
    auth_required=True,
)
def update(number, userId, photoId):
    pass

###############################################################################

@endpoint(
    route="/valorations/$valorationId",
    method="DELETE",
    sql="DELETE FROM Valorations WHERE valorationId = $valorationId",
    description="Removes a photo",
    auth_required=True,
)
def delete():
    pass
