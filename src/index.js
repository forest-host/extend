
// Patched typeof to include array
const get_type = function(variable) {
	let type = typeof(variable);

	switch(type) {
		case 'object': return Array.isArray(variable) ? 'array' : 'object';
		default: return type;
	};
}

// Merge objects
export const extend = function() {
	return Array.from(arguments).reduce((aggregate, object) => {
		if(get_type(object) != 'object')
			throw new Error('Extend only accepts objects')

		// Merge aggregate & object attributes || overwrite aggregate key with objects key
		Object.keys(object).forEach(key => {
			// Skip monkeypatch stuff
			if( ! object.hasOwnProperty(key))
				return;

			let is_object = ['object', 'array'].indexOf(get_type(aggregate[key])) != -1;
			let are_same_type = get_type(aggregate[key]) == get_type(object[key]);

			// Do we have to merge or replace?
			if(is_object && are_same_type) {
				if(get_type(aggregate[key]) == 'array') {
					// Merge arrays
					aggregate[key].push(...object[key]);
				} else {
					// Merge objects
					aggregate[key] = extend(aggregate[key], object[key]);
				}
			} else {
				aggregate[key] = object[key];
			}
		})

		return aggregate;
	});
}

export default extend;
