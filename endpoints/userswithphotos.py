from silence.decorators import endpoint

@endpoint(
    route="/userswithphotos/$userId",
    method="GET",
    sql="SELECT * FROM userswithphotos WHERE userId = $userId"
)
def get_all():
    pass

###############################################################################

