app.factory('LibraryFactory', function($http) {
  return {
    getDevices: () => $http.get('/api/devices/').then(res => res.data),
    getDevice: (id) => $http.get('/api/devices/' + id).then(res => res.data),
    createDevice: (data) => $http.post('/api/devices/', data).then(res => res.data),
    getCategories: () => $http.get('/api/categories/').then(res => res.data),
    addCategory: (data) => $http.post('api/categories/', data),
    getDonors: () => $http.get('/api/donors/').then(res => res.data),
    addDonor: (data) => $http.post('/api/donors/', data),
    getUsers: () => $http.get('/api/users/').then(res => res.data)
  };
});