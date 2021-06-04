from silence.decorators import endpoint

@endpoint(
    route="/mostvalorationsfecha/",
    method="GET",
    sql="SELECT * FROM mostValorationsFecha"
)
def get_all():
    pass

###############################################################################

