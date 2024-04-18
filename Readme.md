......................./////.......===>>>>>contact
<!DOCTYPE html>
<html lang="en">
  <head>
    <%- include('./partials/head') %>
    <title>Homepage</title>
  </head>
  <body {
    
  }>
    <%- include('./partials/nav') %>

    <section class="contact-section py-5">
        <div class="container">
          <div class="row align-items-center">
            <!-- Section with images -->
            <div class="col-md-6 mb-4 mb-md-0">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <img src="/public/images/log.png" alt="Image 1" class="img-fluid rounded">
                </div>
                
              </div>
            </div>
      
            <!-- Section with contact information -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Contact Us</h5>
                  <form action="/contact" method="post">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Phone</label>
                      <input type="tel" class="form-control" id="phone" name="phone" required>
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label">Title</label>
                      <input type="text" class="form-control" id="title" name="title" required>
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">Message</label>
                      <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    <%- include('./partials/scripts') %>
    <%- include('./partials/footer') %>
  </body>
</html>
