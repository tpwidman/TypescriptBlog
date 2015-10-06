module blog {
	export interface IPost extends angular.resource.IResource<IPost> {}

	export interface IPostResource extends angular.resource.IResourceClass<IPost>{ }

}
