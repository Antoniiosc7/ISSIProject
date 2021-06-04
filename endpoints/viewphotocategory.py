from silence.decorators import endpoint

@endpoint(
    route="/viewphotocategory",
    method="GET",
    sql="SELECT * FROM viewphotocategory"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/viewphotocategory/$categoryId",
    method="GET",
    sql="SELECT * FROM viewphotocategory WHERE categoryId = $categoryId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/viewphotocategory/photo/$photoId",
    method="GET",
    sql="SELECT * FROM viewphotocategory WHERE photoId = $photoId"
)
def get_category_by_id():
    pass