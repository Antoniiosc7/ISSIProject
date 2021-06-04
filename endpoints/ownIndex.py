from silence.decorators import endpoint

@endpoint(
    route="/ownindex",
    method="GET",
    sql="SELECT * FROM ownIndex"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/ownindex/$seguidoId",
    method="GET",
    sql="SELECT * FROM ownIndex WHERE seguidoId = $seguidoId"
)
def get_by_id():
    pass