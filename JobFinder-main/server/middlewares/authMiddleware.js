import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  // Vérifier si l'en-tête d'authentification est présent
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new Error("Authentication failed: Missing or invalid Authorization header"));
  }

  const token = authHeader.split(" ")[1];

  try {
    // Vérifier et décoder le jeton JWT
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // Ajouter les informations de l'utilisateur au corps de la requête
    req.body.user = {
      userId: userToken.userId,
    };

    // Appeler next() pour passer au middleware ou à la route suivante
    next();
  } catch (error) {
    console.error(error);

    // En cas d'erreur lors de la vérification du jeton
    return next(new Error("Authentication failed: Invalid token"));
  }
};

export default userAuth;
