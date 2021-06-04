from silence.decorators import endpoint

@endpoint(
    route="/categoryphoto",
    method="POST",
    sql="INSERT INTO CategoryPhoto (photoId, categoryId) VALUES ($photoId, $categoryId)",
    description="Creates a new PhotoCategory",
    auth_required=True,
)
def create(photoId, categoryId):
    pass
######################################################################################
@endpoint(
    route="/categoryphoto/$photoId&$categoryId",
    method="DELETE",
    sql="DELETE FROM categoryphoto WHERE photoId = $photoId && categoryId = $categoryId",
    description="Removes a category",
    auth_required=True,
)
def delete(photoId, categoryId):
    pass