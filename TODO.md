# TODO: Fix Backend Connection Issues

## Issues Identified:
1. GrievanceForm.js calls wrong endpoint `/submit` instead of using `submitComplaint()` from auth.js
2. UserDashboard.js calls wrong endpoint `/complaints` instead of using `getMyComplaints()` from auth.js
3. This causes backend requests to fail, showing "Offline Demo Data" in AdminDashboard

## Fixes:
- [ ] Fix GrievanceForm.js to use `submitComplaint()` from auth.js
- [ ] Fix UserDashboard.js to use `getMyComplaints()` from auth.js
- [ ] Verify admin dashboard can view all user complaints
