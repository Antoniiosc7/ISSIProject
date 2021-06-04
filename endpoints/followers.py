from silence.decorators import endpoint

@endpoint(
    route="/followers",
    method="GET",
    sql="SELECT * FROM Followers"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/followers/$siguiendoId",
    method="GET",
    sql="SELECT * FROM Followers WHERE siguiendoId = $siguiendoId"
)
def get_by_id():
    pass
###############################################################################

@endpoint(
    route="/followers",
    method="POST",
    sql="INSERT INTO Followers (seguidoId, siguiendoId) VALUES ($seguidoId, $siguiendoId)",
    description="Creates a new followers",
    auth_required=True,
)
def create(seguidoId, siguiendoId):
    pass

###############################################################################

@endpoint(
    route="/followers/$seguidoId&$siguiendoId",
    method="DELETE",
    sql="DELETE FROM Followers WHERE seguidoId = $seguidoId && siguiendoId = $siguiendoId",
    description="Removes a photo",
    auth_required=True,
)
def delete(seguidoId, siguiendoId):
    pass
