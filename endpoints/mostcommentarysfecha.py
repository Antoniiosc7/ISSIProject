from silence.decorators import endpoint

@endpoint(
    route="/mostcommentarysfecha/",
    method="GET",
    sql="SELECT * FROM mostcommentarysfecha"
)
def get_all():
    pass

###############################################################################

